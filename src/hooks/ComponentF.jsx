import React from 'react';
// import { UserContext, ChannelContext } from '../App';

function ComponentF() {
   return <div>ComponentF</div>;
}

export default ComponentF;

/*
    <UserContext.Consumer>
    {user => {
        return (
            <ChannelContext.Consumer>
                {channel => {
                return (
                    <div>
                        User: {user}, Channel: {channel}
                    </div>
                );
                }}
            </ChannelContext.Consumer>
        );
    }}
    </UserContext.Consumer>
*/
