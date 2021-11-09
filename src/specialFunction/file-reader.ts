const fileReader = (input: any, ref: any) => {
  const file = input.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    const ava: any = document.getElementById("avatar")
    ava.src = reader.result;
  }
};

export default fileReader;