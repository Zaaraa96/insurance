<template>
  <div class="insuranceForm">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <div class="insuranceCaseHeader">
        <h3 >اطلاعات بیمه نامه و بیمه گذار</h3>
        <a style="padding: 27px;" href="index.html" class="back">
          <svg style="float: left; padding: 15px 15px; width: 24px; color: -webkit-link;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">

          <g id="back_2" data-name="back 2">
            <g id="back-2" data-name="back">
              <polyline class="back-1" points="8.48 1 1 8.48 8.52 16">
              </polyline>
              <line class="back-1" x1="1" y1="8.5" x2="25" y2="8.5"></line></g></g>
            </svg>
        </a>
    </div>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm" label-position="top">

  <el-form-item class="formlist"  prop="idCard" label="کد ملی">
    <el-input v-model="ruleForm.idCard"></el-input>
  </el-form-item>

  <el-form-item class="formlist" prop="name" label="نام">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item class="formlist" prop="familyname" label="نام خانوادگی">
    <el-input v-model="ruleForm.familyname"></el-input>
  </el-form-item>

  <el-form-item class="formlist" prop="cellphone" label="تلفن همراه">
    <el-input v-model="ruleForm.cellphone"></el-input>
  </el-form-item>

  <el-form-item class="formlist" prop="phone" label="تلفن ثابت">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>

  <el-form-item class="formlist" prop="postalcode" label="کد پستی">
    <el-input v-model="ruleForm.postalcode"></el-input>
  </el-form-item>

  <el-form-item class="formlist" prop="address" label="نشانی">
    <el-input v-model="ruleForm.address"></el-input>
  </el-form-item>

<div id="imageupload">
  <div class="up">
    <p >  بارگذاری تصویر کارت ملی  </p>
  </div>
  <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
<div class="down">
    <p > انتخاب فایل</p>
</div>
</div>


  <el-form-item>
    <a  @click="submitForm('ruleForm')">
      <button id="send" type="submit" name="button">  ارسال</button>
    </a>
  </el-form-item>
</el-form>

  </div>
</template>

<script>

export default {

name: "insuranceform",
data() {
  return {
        ruleForm: {
          name: '',
          familyname:'',
          idCard:'',
          phone:'',
          cellphone:'',
          postalcode:'',
          address:'',
          dialogImageUrl: '',
          dialogVisible: false,
        },
        rules: {
          name: [
            { required: true, message: 'نام الزامی است', trigger: 'blur' },
          ],
          familyname: [
            { required: true, message: 'نام خانوادگی الزامی است', trigger: 'blur' },
          ],
          idCard: [
            { required: true, message: 'کد ملی الزامی است', trigger: 'blur' },
            { length:10,pattern: /^\d{10}$/, message: 'مقدار کد ملی معتبر نمی باشد', trigger: 'blur' }
          ],
          phone: [
            {trigger: 'blur' },
          ],
          cellphone: [
            { required: true, message: "شماره تلفن همراه الزامی می باشد", trigger: 'blur' },
            { pattern: /^09\d{9}$/, message: "شماره تلفن همراه معتبر نمی باشد", trigger: 'blur' }
          ],
          postalcode: [
            { required: true, message: "کد پستی الزامی است", trigger: 'blur' },
            { pattern: /^\d{10}$/, message: "کد پستی معتبر نمی باشد", trigger: 'blur' }
          ],
          address: [
            { required: true, message: 'آدرس الزامی است', trigger: 'blur' },
          ],
        }
      };

  },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }

      },
      mounted:function(){
        let iu = document.getElementById("imageupload");
        let w=window.innerWidth;
        console.log(w);
        let m= 0.8*(w-180)/2;
        console.log(m);
        let str= "";
        str+= m;
        str+= "px";
        iu.style.marginRight= str;
        }


}


</script>
<style >



@font-face {
	font-family: IRANSans;
	src: url('/js/font/IRANSansWeb(FaNum).eot?#iefix') format('embedded-opentype'),
	url('/js/font/IRANSansWeb(FaNum).woff') format('font-woff'),
	url('/js/font/IRANSansWeb(FaNum).woff2') format('woff2'),
	url('/js/font/IRANSansWeb(FaNum).ttf') format('truetype')
}
.insuranceCaseHeader {
    padding: 0!important;
    font-size: 14px!important;
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    background: #3b8bff;
    color: #fff;
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.insuranceCaseHeader >h3{
  padding-right: 10px;
}
.el-form{
  margin-top: 70px;
}
#send{
  margin-right: 5%;
  width: 90%;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  font-family: iransans;
  background-color: #409EFF;
  position: relative;
  display: table;
  border: none;
  border-radius: 5px;
}
.insuranceForm{
  font-family: iransans;
  direction: rtl;
  margin: 5%;
  text-align: center;
}
.el-form-item {

  margin-top: 5% !important;
}
.el-input{
  width: 70% !important;
}
.formlist label{
  width: 30% !important;
  float: right !important;
  text-align: right !important;
  text-align: right !important;
  vertical-align: right !important;
}
.el-upload{
  width: 100%;
  background-image: url('/assets/images/national-card-icon.svg');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
  padding-left: 5%;
  padding-right: 5%;
  background-color: white !important;
  border: 0px !important;
}

.up{
  display: inline-block;
  height: 17%;
  width: 100%;
  color: white;
  background-color: #ffa64d;
}
.down{
  display: inline-block;
  height: 17%;
  width: 100%;
  color: white;
  background-color: #ff4081;
}
.up >p{
  margin: 0;
}
.down >p{
  margin: 0;
}
#imageupload{
  height: 200px;
  margin-bottom: 10%;
  border-radius: 1px;
  border: 1px;
  background-color: white;
  box-shadow: 0 0 6px #cacaca;
    border: 1px solid #d8d8d8;
    cursor: pointer;
  width: 180px;
  text-align: center;
  vertical-align: middle;
}
</style>
