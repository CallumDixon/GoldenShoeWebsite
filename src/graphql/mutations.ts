/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      parent
      order
      leaf_node
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      parent
      order
      leaf_node
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      parent
      order
      leaf_node
      createdAt
      updatedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      parent
      price
      description
      image
      stock
      order
      createdAt
      updatedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      parent
      price
      description
      image
      stock
      order
      createdAt
      updatedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      parent
      price
      description
      image
      stock
      order
      createdAt
      updatedAt
    }
  }
`;
export const createCSQuery = /* GraphQL */ `
  mutation CreateCSQuery(
    $input: CreateCSQueryInput!
    $condition: ModelCSQueryConditionInput
  ) {
    createCSQuery(input: $input, condition: $condition) {
      id
      name
      parent
      description
      leaf_node
      order
      createdAt
      updatedAt
    }
  }
`;
export const updateCSQuery = /* GraphQL */ `
  mutation UpdateCSQuery(
    $input: UpdateCSQueryInput!
    $condition: ModelCSQueryConditionInput
  ) {
    updateCSQuery(input: $input, condition: $condition) {
      id
      name
      parent
      description
      leaf_node
      order
      createdAt
      updatedAt
    }
  }
`;
export const deleteCSQuery = /* GraphQL */ `
  mutation DeleteCSQuery(
    $input: DeleteCSQueryInput!
    $condition: ModelCSQueryConditionInput
  ) {
    deleteCSQuery(input: $input, condition: $condition) {
      id
      name
      parent
      description
      leaf_node
      order
      createdAt
      updatedAt
    }
  }
`;
