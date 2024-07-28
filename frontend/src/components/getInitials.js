const getInitials = (name) => {
  if (!name) return '';
  return name.charAt(0).toUpperCase();
};

export default getInitials;