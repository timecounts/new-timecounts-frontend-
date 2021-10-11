const SignupLoginButton = ({ image, social, handler, type }) => {
    return (
        <div className="form-group" onClick={handler} style={{ cursor: 'pointer' }}>
            <div className={`${social?.toLowerCase()}-log input-btn`}>
                <img src={image} alt={`${social} Icon`} />
                <span>{type} with {social}</span>
            </div>
        </div>
    )
}

export default SignupLoginButton
