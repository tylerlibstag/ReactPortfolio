import React, {Component} from "react";
import styles from "./index.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

class WebButton extends Component{
    static propTypes = {
        onClick: PropTypes.func,
        children: PropTypes.node,
        variant: PropTypes.string,
        className: PropTypes.string,
        label: PropTypes.string,
        size: PropTypes.string,
        disabledClassName: PropTypes.string,
        disabled: PropTypes.bool
      };
    
      static defaultProps = {
        className: "button",
        label: "button",
        size: "",
        variant: "basic",
        disabled: false,
        disabledClassName: ""
      };
    
      handleButtonClick = event => {
        const { onClick, disabled } = this.props;
    
        if (disabled) return;
    
        onClick &&
          onClick({
            event
          });
      };
    
      renderChildren = () => {
        const { label, children } = this.props;
    
        if (label) {
          return label;
        }
    
        if (children) {
          return children;
        }
    
        return "WebButton";
      };
    
      render() {
        const {
          className,
          size,
          variant,
          disabled,
          disabledClassName
        } = this.props;
    
        const _className = cx(
          className,
          styles[size],
          styles.button,
          styles[variant],
          {
            [styles.disabled]: disabled,
            [disabledClassName]: disabled
          }
        );
    
        return (
      
            this.renderChildren
            
            
          
        );
      }
    }


export default WebButton; 