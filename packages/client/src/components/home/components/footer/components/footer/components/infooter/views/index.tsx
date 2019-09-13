import React from 'react';
import { InFooter } from './ui';
import imglogo from "../asset/firefox_logos.0.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const InFooterPresentations = () => {
	return (
        <InFooter>
                              <ul>
                                    <li>
                                          <img src={imglogo} alt="" />
                                          <span>Fifox</span>
                                    </li>
                                    <li>
                                          <h1>NAVIGATION</h1>
                                          <ol>
                                                <li>Home</li>
                                                <li>News</li>
                                                <li>Esports</li>
                                                <li>Community</li>
                                                <li>Videos</li>
                                                <li>Games</li>
                                          </ol>
                                    </li>
                              </ul>
                              <h2>
                                    <div>
                                          <input
                                                type="text"
                                                placeholder="Enter email address"
                                          />
                                          <span>
                                                <FontAwesomeIcon
                                                      icon={faSearch}
                                                />
                                          </span>
                                    </div>
                              </h2>
                        </InFooter>
    )
}
export default InFooterPresentations;
