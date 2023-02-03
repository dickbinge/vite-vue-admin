const getPrimaryColor = () => {
  const root = document.querySelector(':root');
  const primaryColor = window.getComputedStyle(root).getPropertyValue('--el-primary-color');
  return primaryColor;
};

export const PRIMARY_COLOR = getPrimaryColor();
