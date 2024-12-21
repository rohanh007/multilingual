import React from 'react'

export default function About({ data, language }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{data?.title?.[language]}</h1>
      <p style={{ margin: '10px 0' }}>{data?.description?.[language]}</p>

      <section style={{ margin: '20px 0' }}>
        <h2>{data?.values?.[language] ? 'Our Values' : ''}</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {data?.values?.[language]?.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </section>

      <section style={{ margin: '20px 0' }}>
        <h2>{data?.teamMessage?.[language] ? 'Team Message' : ''}</h2>
        <p>{data?.teamMessage?.[language]}</p>
      </section>

      <section style={{ margin: '20px 0' }}>
        <h2>{data?.contactCTA?.[language] ? 'Get in Touch' : ''}</h2>
        <p>{data?.contactCTA?.[language]}</p>
      </section>
    </div>
  );
}

