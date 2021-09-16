import tkinter as tk
import rect_nums as numy

def main():
    root = tk.Tk()
    frm_main = tk.Frame(root)
    frm_main.master.title("Rectangle's Area")
    frm_main.pack(padx=4, pady=3, fill=tk.BOTH, expand=1)

    populate_main_window(frm_main)
    root.mainloop()

def populate_main_window(frm_main):
    lbl_width = tk.Label(frm_main, text="Width:")
    ent_width = numy.IntEntry(frm_main, 1, 90, width=5)

    lbl_height = tk.Label(frm_main, text="Height:")
    ent_height = numy.IntEntry(frm_main, 1, 90, width=5)

    lbl_area = tk.Label(frm_main, width=6)

    btn_clear = tk.Button(frm_main, text="Clear")

    lbl_width.grid(  row=0, column=0, padx=3, pady=3)
    ent_width.grid(  row=0, column=1, padx=3, pady=3)

    lbl_height.grid(  row=1, column=0, padx=3, pady=3)
    ent_height.grid(  row=1, column=1, padx=3, pady=3)

    lbl_area.grid( row=0, column=3, padx=3, pady=3)

    btn_clear.grid(row=3, column=0, padx=3, pady=3, columnspan=5, sticky="W")

    def calc(event):
        try:
            width = ent_width.get()
            height = ent_height.get()
            area = width * height

            lbl_area.config(text=f"Area: {area:.0f}")

        except ValueError:
            lbl_area.config(text="")

    def clear():
        ent_width.delete(0, tk.END)
        ent_height.delete(0, tk.END)
        lbl_area.config(text="")
        ent_width.focus()

    ent_width.bind("<KeyRelease>", calc)
    ent_height.bind("<KeyRelease>", calc)

    btn_clear.config(command=clear)

    ent_width.focus()

if __name__ == "__main__":
    main()