async function copyPassword(str) {
  try {
    await navigator.clipboard.writeText(str);
  } catch (err) {
    console.error(err);
  }
}

export default copyPassword;