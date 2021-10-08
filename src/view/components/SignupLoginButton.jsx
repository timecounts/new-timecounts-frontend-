import SocialLogin from "react-social-login";

const SignupLoginButton = ({ image, social, handler }) => {
    return (
        <div className="form-group" onClick={handler} style={{ cursor: 'pointer' }}>
            <div className={`${social?.toLowerCase()}-log input-btn`}>
                <img src={image} alt={`${social} Icon`} />
                <span>Sign up with {social}</span>
            </div>
        </div>
    )
}

export default SignupLoginButton
