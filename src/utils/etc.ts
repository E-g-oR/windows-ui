/**
 * Function to convert pixel size to rem size.
 * @param {number} px Size in pixels
 * @returns {string} size in rem
 */
export const sizeRelative = (px: number) => `${px / 16}rem`;
