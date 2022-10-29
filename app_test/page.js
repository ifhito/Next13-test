import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RootLayout from './layout'
import { Test } from '../components/test.server'
import {TestClient} from '../components/test.client'
export default function Home() {
  
  return (
    <>
      <Test>
        <TestClient />
      </Test>
      test
    </>
  )
}
