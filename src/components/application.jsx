import * as React from 'react';
import "../application.css"

const style1={
    marginLeft: 220,
    marginRight: 220
};

function Application(props) {

    return (
        <div style={style1}>
            <h3 className="heading"> Reading </h3>

            <button className="back">Go Back</button>
            
            <div className="registerbox">
            <label className="lblmainsignup">Sign Up</label>
                <table>
                    <tr><td colspan="2"></td></tr>
                    <tr>
                        <td>Personal Infromation: </td>
                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <div className="frmcol">
                                            <label className="frmlbl">First Name</label>
                                            <img className="icon" src="/images/single_user.svg" />
                                            <input type="text" className="frmtxt" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="frmcol">
                                            <label className="frmlbl">Last Name</label>
                                            <img className="icon" src="/images/single_user.svg" />
                                            <input type="text" className="frmtxt" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                        <table>
                                <tr>
                                    <td>
                                        <div className="frmcol">
                                            <label className="frmlbl">Email Address</label>
                                            <img className="icon" src="/images/mail.svg" />
                                            <input type="email" className="frmtxt" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="frmcol">
                                            <label className="frmlbl">Date of Birth</label>
                                            <img className="icon" src="/images/date.svg" />
                                            <input type="date" className="frmtxt size-225" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                        <div className="frmcol">
                            <label className="frmlbl">Address</label>
                            <img className="icon" src="/images/home.svg" />
                            <input type="email" className="frmtxt size-500" />
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                        <table>
                            <tr>
                                <td>
                                    <div className="frmcol">
                                        <label className="frmlbl">City</label>
                                        <img className="icon" src="/images/home.svg" />
                                        <input type="text" className="frmtxt" />
                                    </div>
                                </td>
                                <td>
                                    <div className="frmcol">
                                        <label className="frmlbl">Province</label>
                                        <img className="icon" src="/images/home.svg" />
                                        <input type="text" className="frmtxt" />
                                    </div>
                                </td>
                            </tr>
                        </table>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                        <table>
                            <tr>
                                <td>
                                    <div className="frmcol">
                                        <label className="frmlbl">Postal Code</label>
                                        <img className="icon" src="/images/home.svg" />
                                        <input type="text" className="frmtxt" />
                                    </div>
                                </td>
                                <td>
                                    <div className="frmcol">
                                        <label className="frmlbl">Country</label>
                                        <img className="icon" src="/images/map.svg" />
                                        <input type="text" className="frmtxt" />
                                    </div>
                                </td>
                            </tr>
                        </table>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button className="signup">Sign Up</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Application;