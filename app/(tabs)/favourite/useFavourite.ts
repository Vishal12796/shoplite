import { RootState } from "@/redux/store";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const useFavourite = () => {
  const { t } = useTranslation();
  const favouriteProductsList = useSelector(
    (state: RootState) => state.favourites.favouritesList,
  );

  return { t, favouriteProductsList };
};
