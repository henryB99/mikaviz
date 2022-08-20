import React, {Component} from "react";
import {AppBar, Toolbar, Typography, Button, IconButton, MenuItem, Menu} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css";
import {withRouter} from 'react-router-dom';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            anchorEl : null
        }
    }

    handleClose = () => {
        this.setState({open : false });
        this.setState({anchorEl : null });
    };

    handleMenu = (event) => {
        this.setState({open : true });
        this.setState({anchorEl : event.currentTarget });
    };

    render() {

        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return <AppBar position="static">
            <Toolbar style={{justifyContent: 'space-between'}}>
                <Typography id="title" variant="h6">Mittellandkanal</Typography>
                <div className="navBar">
                    <Button color="inherit" onClick={() => {
                        this.props.history.push('/Karte')
                    }}>Karte</Button>
                    <Button color="inherit" onClick={() => {
                        this.props.history.push('/')
                    }}>Zeitstrahl</Button>
                </div>

                <div id="menuDiv">

                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Menu
                        anchorEl={this.anchorEl} anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        getContentAnchorEl={null}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={() => {
                            this.handleClose();
                            this.props.history.push('/Impressum')
                        }}>Impressum</MenuItem>

                        <MenuItem onClick={() => {
                            this.handleClose();
                            this.props.history.push('/Datenschutzerklärung')
                        }}>Datenschutzerklärung</MenuItem>
                    </Menu>
                </div>

            </Toolbar>
        </AppBar>
    }
}

export default withRouter(Header);