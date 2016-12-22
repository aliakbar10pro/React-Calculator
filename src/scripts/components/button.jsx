import React from 'react';

class Button extends React.Component {
    isActive() {
        return /active/.test(this.props.className);
    }
    onClick(evt) {       
        evt.preventDefault();         
        this.props.onClick(this.props.id);
    }
    render() {
        return (                                    
            <button type="button" onClick={this.onClick.bind(this)} className={this.props.className}>{this.props.label}</button>            
        );
    }
}

Button.propTypes = { id: React.PropTypes.string };
Button.propTypes = { label: React.PropTypes.string };
Button.propTypes = { onClick: React.PropTypes.func };
Button.propTypes = { className: React.PropTypes.string };

export default Button;