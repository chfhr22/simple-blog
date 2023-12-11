import React from 'react'

const Login = () => {
  return (
    <div id='login__wrap'>
        <div className='login__bg'>
            <div className='login__bg__text'>Login</div>
        </div>
        <form action="" className='login__form'>
            <fieldset>
                <legend className='blind'>로그인 영역</legend>
                <div className='login__id'>
                    <label htmlFor="youId" className='blind'>아이디</label>
                    <input className='youId' type="email" name='youId' placeholder='아이디' autoComplete='off' required/>
                </div>
                <div className='login__pass'>
                    <label htmlFor="youPass" className='blind'>비밀번호</label>
                    <input className='youPass' type="password" name='youPass' placeholder='비밀번호' autoComplete='off' required/>
                </div>
                <button className='login__btn' type='submit'>로그인</button>
            </fieldset>
        </form>
    </div>
  )
}

export default Login