import { toggleFavourite } from "@/redux/slice/favouritesSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export const useProductDetails = (id: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const productDetails = useSelector((state: RootState) =>
    state.products.products.find((p) => p.id === id),
  );
  // Select favourite status
  const isFavourite = useSelector((state: RootState) =>
    state.favourites.favouritesList.find((p) => p.id === id),
  );

  // Toggle favourite
  const handleToggleFavourite = () => {
    if (productDetails) {
      dispatch(toggleFavourite(productDetails));
    }
  };

  return {
    t,
    isFavourite,
    handleToggleFavourite,
    productDetails,
  };
};
