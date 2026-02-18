import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import { Providers } from "./_components/Providers";

const TodoListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <Navbar />
      {children}
      <Footer />
    </Providers>
  );
};

export default TodoListLayout;
