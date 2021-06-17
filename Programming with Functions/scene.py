import tkinter as tk


def main():
    # The width and height of the scene window.
    width = 800
    height = 500

    # Create the Tk root object.
    root = tk.Tk()
    root.geometry(f"{width}x{height}")

    # Create a Frame object.
    frame = tk.Frame(root)
    frame.master.title("Scene")
    frame.pack(fill=tk.BOTH, expand=1)

    # Create a canvas object that will draw into the frame.
    canvas = tk.Canvas(frame)
    canvas.pack(fill=tk.BOTH, expand=1)

    # Call the draw_scene function.
    draw_scene(canvas, 0, 0, width-1, height-1)

    root.mainloop()


def draw_scene(canvas, scene_left, scene_top, scene_right, scene_bottom):
    print(canvas, scene_left, scene_top, scene_right, scene_bottom)
    drawgrid(canvas, scene_left, scene_top, scene_right, scene_bottom, 100)
    draw_sky(canvas, 0, 0)
    draw_sun(canvas, 300, 270)
    draw_cloud(canvas, 0, 0)
    draw_ground(canvas, 0, 400)
    draw_umbrella(canvas, 0, 0)

def draw_ground(canvas, x, y):
    canvas.create_rectangle(x, y, x + 799, y + 100, fill="#EFE59B", outline="#EFE59B")

def draw_cloud(canvas, x, y):
    canvas.create_oval(x + 15, y + 12, x + 78, y + 59, fill="#FFFFFF", outline="#FFFFFF")
    canvas.create_oval(x + 50, y + 217, x + 203, y + 107, fill="#FFFFFF", outline="#FFFFFF")
    canvas.create_oval(x + 350, y + 158, x + 486, y + 54, fill="#FFFFFF", outline="#FFFFFF")
    canvas.create_oval(x + 692, y + 33, x + 602, y + 98, fill="#FFFFFF", outline="#FFFFFF")
    
def draw_sun(canvas, x, y):
    canvas.create_oval(x, y, x + 200, y + 200, fill="#FFF784", outline="#FFF784")

def draw_sky(canvas, x, y):
    canvas.create_rectangle(x, y, x + 799, y + 400, fill="#FF6D48", outline="#FF6D48")
    canvas.create_rectangle(x, y, x + 799, y + 350, fill="#FF5959", outline="#FF5959")
    canvas.create_rectangle(x, y, x + 799, y + 300, fill="#FF537C", outline="#FF537C")
    canvas.create_rectangle(x, y, x + 799, y + 250, fill="#DC58A2", outline="#DC58A2")
    canvas.create_rectangle(x, y, x + 799, y + 200, fill="#B95DC7", outline="#B95DC7")
    canvas.create_rectangle(x, y, x + 799, y + 150, fill="#7373CC", outline="#7373CC")
    canvas.create_rectangle(x, y, x + 799, y + 100, fill="#523CB3", outline="#523CB3")
    canvas.create_rectangle(x, y, x + 799, y + 50, fill="#310499", outline="#310499")

def draw_umbrella(canvas, x, y):
    canvas.create_rectangle(x + 610, y + 276, x + 615, y + 450, fill="#000000", outline="#000000")
    canvas.create_rectangle(x + 466, y + 346, x + 760, y + 306, fill="#000000", outline="#000000")
    canvas.create_oval(x + 466, y + 344, x + 760, y + 276, fill="#000000", outline="#000000")

def drawgrid(canvas, left, top, right, bottom, grid_spacing):
    
    text_horizontal_margin = 20
    text_vertical_margin = 10

    for i in range(top, bottom, grid_spacing):
        canvas.create_line(left, i, right, i)
        canvas.create_text(left + text_horizontal_margin, i + text_vertical_margin, text=f'{i}')

    for i in range(left, right, grid_spacing):
        canvas.create_line(i, top, i, bottom)
        canvas.create_text(i, top + text_vertical_margin, text=f'{i}')


# Call the main function so that
# this program will start executing.
main()