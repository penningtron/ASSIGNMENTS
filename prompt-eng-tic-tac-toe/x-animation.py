import time
import sys

def clear_screen():
    """Clear the terminal screen."""
    sys.stdout.write("\033[H\033[J")
    sys.stdout.flush()

def animate():
    """Animate a rotating 3D 'X' character."""
    frames = [
        [
            "  |    |",
            "   X  X",
            "    XX",
            "   X  X",
            "  X    X",
        ],
        [
            "  X    X",
            "   |  |",
            "    XX",
            "   X  X",
            "  X    X",
        ],
        [
            "  X    X",
            "   X  X",
            "    ||",
            "   X  X",
            "  X    X",
        ],
        [
            "  X    X",
            "   X  X",
            "    XX",
            "   |  |",
            "  X    X",
        ],
        [
            "  X    X",
            "   X  X",
            "    XX",
            "   X  X",
            "  |    |",
        ],
    ]

    for _ in range(20):  # Number of frames
        for frame in frames:
            clear_screen()
            for line in frame:
                print(line)
            time.sleep(0.1)

if __name__ == "__main__":
    animate()
