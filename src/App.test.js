import { render, screen ,fireEvent} from '@testing-library/react';
import App from './App';

test('Renders Berhasil', () => {
  render(<App />);
});


describe("check hasil 3 input",()=>{
  it("Tambah",()=>{
    render(<App />);
    const inputelement = screen.getByTestId(/AngkaPertama/i);
    const checklist = screen.getByTestId(/checklistpertama/i);

    const inputelement1 = screen.getByTestId(/AngkaKedua/i);
    const checklist1 = screen.getByTestId(/checklistkedua/i);

    const inputelement2 = screen.getByTestId(/AngkaKetiga/i);
    const checklist2 = screen.getByTestId(/checklistketiga/i);

    const buttonelement = screen.getByTestId(/tambah/i);
    const hasilelement = screen.getByTestId(/hasil/i);
    fireEvent.change(inputelement,{target:{value: 10}});
    fireEvent.click(checklist);
    fireEvent.change(inputelement1,{target:{value: 2}});
    fireEvent.click(checklist1);
    fireEvent.change(inputelement2,{target:{value: 5}});
    fireEvent.click(checklist2);
    fireEvent.click(buttonelement);

    expect(hasilelement.textContent).toBe("Hasil : 17");
  });

  it("Kurang",()=>{
    render(<App />);
    const inputelement = screen.getByTestId(/AngkaPertama/i);
    const checklist = screen.getByTestId(/checklistpertama/i);

    const inputelement1 = screen.getByTestId(/AngkaKedua/i);
    const checklist1 = screen.getByTestId(/checklistkedua/i);

    const inputelement2 = screen.getByTestId(/AngkaKetiga/i);
    const checklist2 = screen.getByTestId(/checklistketiga/i);

    const buttonelement = screen.getByTestId(/kurang/i);
    const hasilelement = screen.getByTestId(/hasil/i);
    fireEvent.change(inputelement,{target:{value: 10}});
    fireEvent.click(checklist);
    fireEvent.change(inputelement1,{target:{value: 2}});
    fireEvent.click(checklist1);
    fireEvent.change(inputelement2,{target:{value: 5}});
    fireEvent.click(checklist2);
    fireEvent.click(buttonelement);

    expect(hasilelement.textContent).toBe("Hasil : 3");
  });

  it("Kali",()=>{
    render(<App />);
    const inputelement = screen.getByTestId(/AngkaPertama/i);
    const checklist = screen.getByTestId(/checklistpertama/i);

    const inputelement1 = screen.getByTestId(/AngkaKedua/i);
    const checklist1 = screen.getByTestId(/checklistkedua/i);

    const inputelement2 = screen.getByTestId(/AngkaKetiga/i);
    const checklist2 = screen.getByTestId(/checklistketiga/i);

    const buttonelement = screen.getByTestId(/kali/i);
    const hasilelement = screen.getByTestId(/hasil/i);
    fireEvent.change(inputelement,{target:{value: 10}});
    fireEvent.click(checklist);
    fireEvent.change(inputelement1,{target:{value: 2}});
    fireEvent.click(checklist1);
    fireEvent.change(inputelement2,{target:{value: 5}});
    fireEvent.click(checklist2);
    fireEvent.click(buttonelement);

    expect(hasilelement.textContent).toBe("Hasil : 100");
  });

  it("Bagi",()=>{
    render(<App />);
    const inputelement = screen.getByTestId(/AngkaPertama/i);
    const checklist = screen.getByTestId(/checklistpertama/i);

    const inputelement1 = screen.getByTestId(/AngkaKedua/i);
    const checklist1 = screen.getByTestId(/checklistkedua/i);

    const inputelement2 = screen.getByTestId(/AngkaKetiga/i);
    const checklist2 = screen.getByTestId(/checklistketiga/i);

    const buttonelement = screen.getByTestId(/bagi/i);
    const hasilelement = screen.getByTestId(/hasil/i);
    fireEvent.change(inputelement,{target:{value: 10}});
    fireEvent.click(checklist);
    fireEvent.change(inputelement1,{target:{value: 2}});
    fireEvent.click(checklist1);
    fireEvent.change(inputelement2,{target:{value: 5}});
    fireEvent.click(checklist2);
    fireEvent.click(buttonelement);

    expect(hasilelement.textContent).toBe("Hasil : 1");
  });
});