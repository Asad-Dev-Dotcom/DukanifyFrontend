import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QueryList, ViewChildren, ElementRef } from '@angular/core';
import { LoginService } from '../../service/Login-Service/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-verify-login-otp',
  templateUrl: './verify-login-otp.component.html',
  styleUrls: ['./verify-login-otp.component.scss']
})
export class VerifyLoginOTPComponent {

otpForm!: FormGroup;
  userEmail : string = 'asad@gmail.com'
  config = { length: 4, allowNumbersOnly : true }
  resendCooldown: number = 120; 
  isResendDisabled: boolean = false;
  cooldownTimer: any;
  formSubmitted = false;
  comingOTP : string = JSON.parse(localStorage.getItem('otp') || '')
  verifyOTP : boolean = false
  userId : string = JSON.parse(localStorage.getItem('id') || '')


  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;

  constructor(private fb: FormBuilder, private service : LoginService, private router: Router) {}

  ngOnInit(): void {
   
    this.otpForm = this.fb.group({
      otp : ['', Validators.required]
    })
  }


  get otp(){
    return this.otpForm.get('otp')
  }






onResendOtp(): void {
  if (this.isResendDisabled) return;

  console.log("Resending OTP to:", this.userEmail);
  

  this.service.resendOTP(this.userId).subscribe({
    next : (res:any) => {
      console.log('OTP Resend')
      console.log("Hello--->",res)
      localStorage.removeItem('otp');
      localStorage.setItem('otp', JSON.stringify(res.token))
      this.startCooldown();
    },
    error : err => {
      console.log('OTP RESEND FAILED')
    }
  })
}

startCooldown(): void {
  this.isResendDisabled = true;
  this.resendCooldown = 60;

  this.cooldownTimer = setInterval(() => {
    this.resendCooldown--;

    if (this.resendCooldown === 0) {
      clearInterval(this.cooldownTimer);
      this.isResendDisabled = false;
    }
  }, 1000);
}



  onSubmit(): void {
  this.formSubmitted = true;
  this.verifyOTP = false;

  if (this.otpForm.valid) {
    const enteredOtp = this.otpForm.get('otp')?.value;
    this.comingOTP = JSON.parse(localStorage.getItem('otp') || '')
    

    if (String(enteredOtp) !== this.comingOTP) {
      console.log(this.comingOTP)
      this.verifyOTP = true;
      console.log('Invalid OTP:', enteredOtp);
    } else {
      console.log('Correct OTP:', enteredOtp);
      console.log('userid=====', this.userId)
      this.service.verifyOTP(this.userId, enteredOtp).subscribe({
        next : res => {
          console.log('successfully verify')
          this.router.navigate(['/changePassword'])
        },
        error : err => {
          console.log('Verify failled')
        }
      })
    }

  } else {
    this.otpForm.markAllAsTouched();
  }
}

}




