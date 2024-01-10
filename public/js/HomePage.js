const button = document.querySelector(".button");
const MSSV = document.querySelector(".MSSV");
const source = document.querySelector(".source");
const insertData = document.querySelector(".insertData");
// console.log(MSSV);
// console.log(source);

button.addEventListener("click", async () => {
  console.log("MSSV:  ", MSSV.value);
  console.log("source:   ", source.value);

  const response = await axios.post("/", {
    MSSV: MSSV.value,
    Course: source.value,
  });
  const data = response.data;
  const { MssvStudent, NameStudent } = data.MSSVofstudent;
  const { subject } = data.subjectofstudent;
  const { Scores } = data;

  console.log({ MssvStudent, NameStudent });
  console.log({ subject });
  console.log({ Scores });

  //   console.log(data);

  const template = `       
                            <div class="row border border-bottom">
                                <div class="col-md-3 py-2 border-right">Họ Và Tên</div>
                                <div class="col-md-3 py-2  border-right">MSSV</div>
                                <div class="col-md-3 py-2 border-right">Môn Học</div>
                                <div class="col-md-3 py-2      ">Điểm Số</div>
                            </div>
                            <div class="row border border-bottom  ">
                                <div class="col-md-3 border-right">${MssvStudent}</div>
                                <div class="col-md-3 border-right">${NameStudent}</div>
                                <div class="col-md-3 border-right">${subject}</div>
                                <div class="col-md-3">${Scores}</div>
                            </div>
                        `;

  insertData.innerHTML = template;
});
