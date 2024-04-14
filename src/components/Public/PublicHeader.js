import React, {Component} from "react";
import {Logo, LogInButton, LogoutButton, HeaderButton, UserProfile} from "@/components/Public/header";

function PublicHeader(){
    return (
        <header className="navbar navbar-expand navbar-dark header py-3">
            <div className="container">
                <div>
                    <Logo />   
                    <HeaderButton>Rejoignez-Nous</HeaderButton>
                    <HeaderButton>A Propos</HeaderButton>
                </div>
                <div className="navbar-nav ml-auto">
                    {/* <LogoutButton /> */}
                    <LogInButton />
                    {/* <UserProfile /> */}
                </div>
            </div>
            {
            <style>
                {`
                .header {
                    background-color: #31AFB4;
                }
                `}
            </style>
            }
        </header>
    )   
}
export default PublicHeader;