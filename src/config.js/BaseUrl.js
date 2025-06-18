import React from 'react'

const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:3000"
  : "https://safelogin-server-production.up.railway.app"

export default BASE_URL