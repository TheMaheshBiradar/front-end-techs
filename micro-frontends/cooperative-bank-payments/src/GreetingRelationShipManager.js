import React from "react";

export default function GreetingToRelationShip(props) {
    const { greeting } = props.match.params;
    const greetingCatUrl = `Dear ${greeting}`;

    return (
        <div>
            <header>
                <h3>Message from RM</h3>
                {!greeting ? (
                    <div>Needs a greeting</div>
                ) : (
                    <div>
                        <h2>{greetingCatUrl}</h2>
                    </div>
                )}
            </header>
        </div>
    );
}