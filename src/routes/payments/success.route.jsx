import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser, updateCardDetails } from "../../utils/firebase/firebase.util";
import { Link } from "react-router-dom";

const Success = () => {
  const queryClient = useQueryClient();
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const { width, height } = windowDimensions;

  const { data, error, isError, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const {
    mutate: updateCard,
    isUpdatingCard,
    isErrorUpdating,
    errorUpdatingCard,
  } = useMutation({
    mutationFn: updateCardDetails,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["user"],
      }),
  });

  useEffect(() => {
    if (data) {
      updateCard({ ...data.card, status: "pending", hasPaid: true });
    }
    const updateWindowDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      window.addEventListener("resize", updateWindowDimensions);

      return window.removeEventListener("resize", updateWindowDimensions);
    };
  }, [data]);

  if (isPending || isUpdatingCard)
    return (
      <div className="t-flex t-justify-center t-my-f-24">
        <span className="custom-loader"></span>
      </div>
    );

  const {
    card: { cardImageFront, cardImageBack, orientation },
  } = data;

  return (
    <section>
      <div className="container">
        <h2 className="t-my-f-48 t-text-center t-text-4xl t-font-bold">
          Congratulations! Payment done successfully
        </h2>

        <h3 className="t-text-3xl t-mb-f-16 t-text-center">Card</h3>

        <div
          className={`t-grid t-grid-cols-2 t-gap-f-48 t-justify-center t-items-center`}
        >
          {/* card frontside */}
          <div className="t-justify-self-end">
            <h4 className="t-mb-f-8">Front</h4>
            <img
              src={cardImageFront}
              alt="front image of the card"
              className={`${
                orientation === "portrait"
                  ? "t-max-h-[325px] t-max-w-[204px]"
                  : "t-max-w-[325px] t-max-h-[204px]"
              }`}
            />
          </div>

          {/* card backside */}
          <div className="t-justify-self-start">
            <h4 className="t-mb-f-8">Back</h4>
            <img
              src={cardImageBack}
              className={`${
                orientation === "portrait"
                  ? "t-max-h-[325px] t-max-w-[204px]"
                  : "t-max-w-[325px] t-max-h-[204px]"
              }`}
              alt="front image of the card"
            />
          </div>
        </div>

        <div className="t-text-center t-my-f-48">
          <Link
            className="f-btn-lg f-btn-primary"
            to="/nfc/creation/digital-profile/template"
          >
            Create Digital Profile
          </Link>
        </div>
      </div>
      <Confetti width={width} height={height} />
    </section>
  );
};

export default Success;
