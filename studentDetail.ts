function studentDetail(data: any) {
  const studentData: any = [];
  data.forEach((element: any) => {
    studentData.push({
      name: element?.name,
      email: element?.email,
      phone: element?.phone,
      zip: element?.address?.zipcode
    });
  });
  return studentData;
}
export default studentDetail;
