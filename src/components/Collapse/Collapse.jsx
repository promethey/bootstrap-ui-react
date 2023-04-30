import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Box from 'components/Box';
import { Transition } from 'react-transition-group';
import './style.css';
import classNames from 'classnames';

function Collapse(props) {
  const {
    style,
    children,
    className,
    in: inProp,
    horizontal,
    mountOnEnter,
    unmountOnExit,
    appear,
    enter,
    exit,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    ...rest
  } = props;

  const [dimension, setDimension] = useState(null);
  const nodeRef = useRef(null);

  const transitions = {
    entering: 'collapsing',
    entered: 'collapse show',
    exiting: 'collapsing',
    exited: 'collapse',
  };

  const getTransitonClassName = (status) => (transitions[status] || 'collapse');

  const getNode = () => nodeRef.current;

  function getDimension(node) {
    return horizontal ? node.scrollWidth : node.scrollHeight;
  }

  // dimension: node
  function handlerEntering(_, isAppearing) {
    const node = getNode();
    setDimension(getDimension(node));
    if (typeof onEntering === 'function') {
      onEntering(node, isAppearing);
    }
  }

  // dimension: null
  function handlerEntered(_, isAppearing) {
    const node = getNode();
    setDimension(null);
    if (typeof onEntered === 'function') {
      onEntered(node, isAppearing);
    }
  }

  // dimension: node
  function handlerExit() {
    const node = getNode();
    setDimension(getDimension(node));
    if (typeof onExit === 'function') {
      onExit(node);
    }
  }

  // dimension: 0
  function handlerExiting() {
    const node = getNode();
    const unused = getDimension(node); // eslint-disable-line no-unused-vars
    setDimension(0);
    if (typeof onExiting === 'function') {
      onExited(node);
    }
  }

  // dimension: null
  function handlerExited() {
    const node = getNode();
    setDimension(null);
    if (typeof onExited === 'function') {
      onExited(node);
    }
  }

  return (
    <Transition
      nodeRef={nodeRef}
      timeout={350}
      in={inProp}
      appear={appear}
      enter={enter}
      exit={exit}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
      onEntering={handlerEntering}
      onEntered={handlerEntered}
      onExit={handlerExit}
      onExiting={handlerExiting}
      onExited={handlerExited}
    >
      {(status) => {
        const classes = classNames(
          getTransitonClassName(status),
          { 'collapse-horizontal': horizontal },
        );

        const customStyles = (dimension === null) ? null
          : { [horizontal ? 'width' : 'height']: dimension };

        return (
          <Box
            ref={nodeRef}
            style={{ ...customStyles, ...style }}
            className={classes}
            {...rest}
          >
            {children}
          </Box>
        );
      }}
    </Transition>
  );
}

Collapse.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other subcomponents */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  // Triggers the enter or exit states
  in: PropTypes.bool,

  /** Activate horizontal collapsing */
  horizontal: PropTypes.bool,

  /** Mount collapse in first render */
  mountOnEnter: PropTypes.bool,

  /** Unmount collapse when animation exit */
  unmountOnExit: PropTypes.bool,

  // Add transition when it first mounts
  appear: PropTypes.bool,

  /** Activate enter transitions */
  enter: PropTypes.bool,

  /** Activate exit transitions */
  exit: PropTypes.bool,

  /** Callbacks for other transitions */
  onEnter: PropTypes.func,
  onEntering: PropTypes.func,
  onEntered: PropTypes.func,
  onExit: PropTypes.func,
  onExiting: PropTypes.func,
  onExited: PropTypes.func,
};

Collapse.defaultProps = {
  style: null,
  className: null,
  in: false,
  horizontal: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: null,
  onEntering: null,
  onEntered: null,
  onExit: null,
  onExiting: null,
  onExited: null,
};

export default Collapse;
