'use client'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

import styles from './header.module.css'
import Link from 'next/link'

import {Play} from 'next/font/google'
import clsx from 'clsx'

const play = Play({subsets: ['cyrillic'], weight: '400'})

type Props = {}

export default function Header({}: Props) {
  return (
    <Box className={styles.HeaderBox}>
        <Box className={styles.NavBox}>
            <Link href={'/equipment'}> Оборудование</Link>
            <Link href={'/rent'}> Аренда</Link>
            <Link href={'/myEquipment'}> Мое оборудование</Link>
        </Box>
        <Typography variant='h4' className={clsx(styles.TitleTypography, play.className)}>Логотип</Typography>
        <Box className={styles.UserBox}>
            <Button variant='outlined' LinkComponent={Link} href='/signIn'>
                Вход
            </Button>
        </Box>
    </Box>
  )
}