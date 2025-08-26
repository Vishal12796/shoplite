import { AppDispatch, RootState } from "@/redux/store"; // Import the correct type for dispatch
import { getProducts } from "@/redux/thunkActions";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export const useHome = () => {
  const { t } = useTranslation();
  const productsData = useSelector((state: RootState) => state.products);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchProducts(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = () => {
    fetchProducts(true);
  };

  const fetchProducts = async (isRefresh?: boolean) => {
    if (isRefresh) setRefresh(true);
    else setLoading(true);

    try {
      dispatch(getProducts())
        .unwrap()
        .then(() => {
          if (isRefresh) setRefresh(false);
          else setLoading(false);
        })
        .catch(() => {
          if (isRefresh) setRefresh(false);
          else setLoading(false);
        });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = useMemo(() => {
    return productsData.products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [productsData.products, search]);

  const emptyMessage = useMemo(() => {
    if (search?.trim().length >= 1 && filteredProducts.length === 0) {
      return t("noResultsMatchYourSearch");
    }

    return t("noProductsFound");
  }, [filteredProducts.length, search, t]);

  return {
    t,
    loading,
    search,
    setSearch,
    filteredProducts,
    emptyMessage,
    onRefresh,
    refresh,
  };
};
