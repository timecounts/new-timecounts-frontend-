import React from "react";
import SocialLogin from "react-social-login";

class SocialButton extends React.Component {
  render() {
    const { children, triggerLogin, image, social, ...props } = this.props;
    
    return (
		<div onClick={triggerLogin} {...props} className="form-group" style={{ cursor: 'pointer' }}>
			{children}
		</div>
    );
  }
}

export default SocialLogin(SocialButton);
