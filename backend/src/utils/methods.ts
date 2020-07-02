import { DEFAULT_PAGE_SIZE, DEFAULT_PAGE } from './constant'

export const getPagination = (
  page = DEFAULT_PAGE,
  first = DEFAULT_PAGE_SIZE
) => {
  if (page < DEFAULT_PAGE) throw new Error('BadPaginationPage')
  if (first < 0) throw new Error('BadPaginationLimit')
  const start = page - 1
  // Add one to check if there's a page after
  const skip = start * first
  return {
    skip,
    take: first + 1,
  }
}
