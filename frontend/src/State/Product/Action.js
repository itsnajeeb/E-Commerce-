import { api } from "../../config/apiConfig"
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"


export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  try {
    const {
      color,
      size,
      minPrice,
      maxPrice,
      minDiscount,
      category,
      stock,
      sort,
      pageNumber,
      pageSize,
    } = reqData;

    const params = new URLSearchParams();

    if (color && color.length > 0) params.append("color", color.join(","));
    if (size && size.length > 0) params.append("size", size.join(","));
    if (minPrice && minPrice > 0) params.append("minPrice", minPrice);
    if (maxPrice && maxPrice < 10000) params.append("maxPrice", maxPrice);
    if (minDiscount && minDiscount > 0) params.append("minDiscount", minDiscount);
    if (category && category !== "all") params.append("category", category);
    if (stock && stock !== "in") params.append("stock", stock);
    if (sort && sort !== "price_low") params.append("sort", sort);
    if (pageNumber && pageNumber > 0) params.append("pageNumber", pageNumber);
    if (pageSize && pageSize !== 10) params.append("pageSize", pageSize);

    const query = params.toString();
    const endpoint = query ? `/api/product?${query}` : `/api/product`;

    // console.log("Final API call:", endpoint);

    const { data } = await api.get(endpoint);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductsById = (productId) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
    // console.log("PR ID > ", productId);
    
    try {
        const { data } = await api.get(`api/product/id/${productId}`)
        // console.log("DATA ", data);
        
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
    }
}