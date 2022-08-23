import React from 'react';
import Image from 'react-bootstrap/Image'
import home from '../../storages/images/home.png'
import './Preferences.css'
import Header from '../../components/Header/Header';

export default function Preferences({ setToken }) {
  return(
    <>
      <Image src={home} class="image-background" fluid/>
    </>
  );
}