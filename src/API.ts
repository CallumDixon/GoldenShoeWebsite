/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  parent: string,
  order?: number | null,
  leaf_node?: boolean | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  order?: ModelIntInput | null,
  leaf_node?: ModelBooleanInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  parent: string,
  order?: number | null,
  leaf_node?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  parent?: string | null,
  order?: number | null,
  leaf_node?: boolean | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  parent: string,
  price: string,
  description: string,
  image: string,
  order?: number | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  price?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  parent: string,
  price: string,
  description: string,
  image: string,
  order?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  parent?: string | null,
  price?: string | null,
  description?: string | null,
  image?: string | null,
  order?: number | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateCSQueryInput = {
  id?: string | null,
  name: string,
  parent: string,
  description?: string | null,
  leaf_node: boolean,
  order?: number | null,
};

export type ModelCSQueryConditionInput = {
  name?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  description?: ModelStringInput | null,
  leaf_node?: ModelBooleanInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelCSQueryConditionInput | null > | null,
  or?: Array< ModelCSQueryConditionInput | null > | null,
  not?: ModelCSQueryConditionInput | null,
};

export type CSQuery = {
  __typename: "CSQuery",
  id: string,
  name: string,
  parent: string,
  description?: string | null,
  leaf_node: boolean,
  order?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCSQueryInput = {
  id: string,
  name?: string | null,
  parent?: string | null,
  description?: string | null,
  leaf_node?: boolean | null,
  order?: number | null,
};

export type DeleteCSQueryInput = {
  id: string,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  order?: ModelIntInput | null,
  leaf_node?: ModelBooleanInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  price?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product >,
  nextToken?: string | null,
};

export type ModelCSQueryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  description?: ModelStringInput | null,
  leaf_node?: ModelBooleanInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelCSQueryFilterInput | null > | null,
  or?: Array< ModelCSQueryFilterInput | null > | null,
  not?: ModelCSQueryFilterInput | null,
};

export type ModelCSQueryConnection = {
  __typename: "ModelCSQueryConnection",
  items:  Array<CSQuery >,
  nextToken?: string | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    parent: string,
    order?: number | null,
    leaf_node?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    parent: string,
    order?: number | null,
    leaf_node?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    parent: string,
    order?: number | null,
    leaf_node?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    parent: string,
    price: string,
    description: string,
    image: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    parent: string,
    price: string,
    description: string,
    image: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    parent: string,
    price: string,
    description: string,
    image: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCSQueryMutationVariables = {
  input: CreateCSQueryInput,
  condition?: ModelCSQueryConditionInput | null,
};

export type CreateCSQueryMutation = {
  createCSQuery?:  {
    __typename: "CSQuery",
    id: string,
    name: string,
    parent: string,
    description?: string | null,
    leaf_node: boolean,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCSQueryMutationVariables = {
  input: UpdateCSQueryInput,
  condition?: ModelCSQueryConditionInput | null,
};

export type UpdateCSQueryMutation = {
  updateCSQuery?:  {
    __typename: "CSQuery",
    id: string,
    name: string,
    parent: string,
    description?: string | null,
    leaf_node: boolean,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCSQueryMutationVariables = {
  input: DeleteCSQueryInput,
  condition?: ModelCSQueryConditionInput | null,
};

export type DeleteCSQueryMutation = {
  deleteCSQuery?:  {
    __typename: "CSQuery",
    id: string,
    name: string,
    parent: string,
    description?: string | null,
    leaf_node: boolean,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    parent: string,
    order?: number | null,
    leaf_node?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      parent: string,
      order?: number | null,
      leaf_node?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    parent: string,
    price: string,
    description: string,
    image: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      parent: string,
      price: string,
      description: string,
      image: string,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetCSQueryQueryVariables = {
  id: string,
};

export type GetCSQueryQuery = {
  getCSQuery?:  {
    __typename: "CSQuery",
    id: string,
    name: string,
    parent: string,
    description?: string | null,
    leaf_node: boolean,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCSQuerysQueryVariables = {
  filter?: ModelCSQueryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCSQuerysQuery = {
  listCSQuerys?:  {
    __typename: "ModelCSQueryConnection",
    items:  Array< {
      __typename: "CSQuery",
      id: string,
      name: string,
      parent: string,
      description?: string | null,
      leaf_node: boolean,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type CategoryByOrderQueryVariables = {
  parent?: string | null,
  order?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CategoryByOrderQuery = {
  categoryByOrder?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      parent: string,
      order?: number | null,
      leaf_node?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type ProductByOrderQueryVariables = {
  parent?: string | null,
  order?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductByOrderQuery = {
  productByOrder?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      parent: string,
      price: string,
      description: string,
      image: string,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type CSQueryByOrderQueryVariables = {
  parent?: string | null,
  order?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCSQueryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CSQueryByOrderQuery = {
  CSQueryByOrder?:  {
    __typename: "ModelCSQueryConnection",
    items:  Array< {
      __typename: "CSQuery",
      id: string,
      name: string,
      parent: string,
      description?: string | null,
      leaf_node: boolean,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    parent: string,
    order?: number | null,
    leaf_node?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    parent: string,
    order?: number | null,
    leaf_node?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    parent: string,
    order?: number | null,
    leaf_node?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    parent: string,
    price: string,
    description: string,
    image: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    parent: string,
    price: string,
    description: string,
    image: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    parent: string,
    price: string,
    description: string,
    image: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCSQuerySubscription = {
  onCreateCSQuery?:  {
    __typename: "CSQuery",
    id: string,
    name: string,
    parent: string,
    description?: string | null,
    leaf_node: boolean,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCSQuerySubscription = {
  onUpdateCSQuery?:  {
    __typename: "CSQuery",
    id: string,
    name: string,
    parent: string,
    description?: string | null,
    leaf_node: boolean,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCSQuerySubscription = {
  onDeleteCSQuery?:  {
    __typename: "CSQuery",
    id: string,
    name: string,
    parent: string,
    description?: string | null,
    leaf_node: boolean,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
