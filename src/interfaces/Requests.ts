interface ResponseData<T> {
  data?: T
  authToken?: string
  status: number
}

export type {
  ResponseData,
};
