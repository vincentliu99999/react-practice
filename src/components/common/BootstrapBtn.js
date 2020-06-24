import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

// preventing rendering
function HealthAlter(props) {
  if (!props.isLightOn) {
    return null;
  }

  return (
    <Button bsStyle="danger"> 再不關燈就... </Button>
  );
}

/**
 * BootstrapBtn Component
 */
class BootstrapBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLightOn: false,
    };
  }

  toggleLogin = () => {
    this.setState(state => ({
      isLightOn: !state.isLightOn
    }));
  }

  render() {
    const isLightOn = this.state.isLightOn;
    let lightButton;

    if (isLightOn) {
      lightButton = <Button bsStyle="primary" onClick={() => this.toggleLogin()}> 關燈 </Button>;
    } else {
      lightButton = <Button bsStyle="dark" onClick={() => this.toggleLogin()}> 開燈 </Button>;
    }
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Circle Icon Buttons with Font Awesome Icons
        </div>

        <div className="panel-body">
          <h4> Theme Circle Buttons </h4>
          <button type="button" className="btn btn-default btn-circle">
            <i className="fa fa-check" />
          </button>
          <button type="button" className="btn btn-primary btn-circle">
            <i className="fa fa-list" />
          </button>
          <button type="button" className="btn btn-success btn-circle">
            <i className="fa fa-link" />
          </button>
          <button type="button" className="btn btn-info btn-circle">
            <i className="fa fa-check" />
          </button>
          <button type="button" className="btn btn-warning btn-circle">
            <i className="fa fa-times" />
          </button>
          <button type="button" className="btn btn-danger btn-circle">
            <i className="fa fa-heart" />
          </button>
          <br />
          <br />
          <h4> Theme React Bootstrap Circle Buttons </h4>
          <ButtonToolbar>
            <Button bsStyle="btn btn-default btn-circle">
              <i className="fa fa-check" />
            </Button>
            <Button bsStyle="btn btn-primary btn-circle">
              <i className="fa fa-list" />
            </Button>
            <Button bsStyle="btn btn-success btn-circle">
              <i className="fa fa-link" />
            </Button>
            <Button bsStyle="btn btn-info btn-circle">
              <i className="fa fa-check" />
            </Button>
            <Button bsStyle="btn btn-warning btn-circle">
              <i className="fa fa-times" />
            </Button>
            <Button bsStyle="btn btn-danger btn-circle">
              <i className="fa fa-heart" />
            </Button>
          </ButtonToolbar>
          <br />
          <br />
          <h4> React Bootstrap Buttons </h4>
          <ButtonToolbar>
            <Button> Default </Button>
            <Button bsStyle="primary"> Primary </Button>
            <Button bsStyle="success"> Success </Button>
            <Button bsStyle="info"> Info </Button>
            <Button bsStyle="warning"> Warning </Button>
            <Button bsStyle="danger"> Danger </Button>
            <Button bsStyle="link"> Link </Button>
          </ButtonToolbar>
          <ButtonToolbar>
            { lightButton }
            {/* inline condition */}
            { isLightOn && <Button bsStyle="warning"> 提醒您，睡覺前請關燈 </Button> }
            { isLightOn
              ? <Button bsStyle="info"> 燈還開著 </Button>
              : <Button bsStyle="dark"> 燈關了 </Button> }
            <HealthAlter isLightOn={isLightOn} />
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default BootstrapBtn;
