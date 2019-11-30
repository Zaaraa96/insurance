<template>
  <div class="insuranceForm">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">

  <el-form-item class="formlist" label-position="left"  prop="name" label="کد ملی">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item class="formlist" label-position="top" label-width="" prop="name" label="نام">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item class="formlist" label-position="top" label-width="" prop="name" label="نام خانوادگی">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item class="formlist" label-position="top" label-width="" prop="name" label="تلفن همراه">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item class="formlist" label-position="top" label-width="" prop="name" label="تلفن ثابت">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item class="formlist" label-position="top" label-width="" prop="name" label="کد پستی">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item class="formlist" label-position="top" label-width="" prop="name" label="نشانی">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>


  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
    <el-button @click="resetForm('ruleForm')">Reset</el-button>
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
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
          ]
        }
      };

  },
    methods: {
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
        let fl = document.getElementsByClassName("formlist");
        console.log(fl);
        for (var i = 0; i < fl.length; i++) {
          //logfl[i]
        }
      },

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
.insuranceForm{
  direction: rtl;
  margin: 5%;
  text-align: center;
}

</style>
