const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
}

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
}

export default function F12Main() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
      <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td style={tableCellStyle}><a href='/Page1'>/Page1</a></td>
            <td style={tableCellStyle}><a href='/Page1'>Page 1</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Page2'>/Page2</a></td>
            <td style={tableCellStyle}><a href='/Page2'>Page 2</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Page3'>/Page3</a></td>
            <td style={tableCellStyle}><a href='/Page3'>Page 3</a></td>
          </tr>
</tbody>
      </table>
    </div>
  );
}