const User = ({user}) => {
  return (
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {user.id}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {user.name}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
          {user.email}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {user.role}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"></td>
      </tr>
  );
};

export default User;
