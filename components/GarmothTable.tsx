export const GarmothTable = () => {
  return (
    <table className="w-full table-auto">
    <thead>
      <tr>
        <th className="bg-red-400 px-4 py-2 text-zinc-50 border">Dia</th>
        <th className="bg-red-400 px-4 py-2 text-zinc-50 border">Horário</th>
        <th className="bg-red-400 px-4 py-2 text-zinc-50 border">Garmoth</th>
      </tr>
    </thead>
    <tbody className="text-center">
      <tr>
        <td className="border px-4 py-2 text-start">Segunda-feira</td>
        <td className="border px-4 py-2">23:45</td>
        <td className="border px-4 py-2">Garmoth</td>
      </tr>
      <tr>
        <td className="border px-4 py-2 text-start">Quarta-feira</td>
        <td className="border px-4 py-2">23:45</td>
        <td className="border px-4 py-2">Garmoth</td>
      </tr>
      <tr>
        <td className="border px-4 py-2 text-start">Sexta-feira</td>
        <td className="border px-4 py-2">23:45</td>
        <td className="border px-4 py-2">Garmoth</td>
      </tr>
    </tbody>
  </table>
  );
};

