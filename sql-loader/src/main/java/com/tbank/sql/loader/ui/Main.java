package com.tbank.sql.loader.ui;

import com.tbank.sql.loader.ui.panel.sql.MainPanel;

import javax.swing.*;
import java.awt.*;

public class Main {
    public static void main(String[] args) {
        System.setProperty("awt.useSystemAAFontSettings", "lcd");
        System.setProperty("swing.aatext", "true");
        System.setProperty("sun.java2d.renderer", "sun.java2d.marlin.MarlinRenderingEngine");

        SwingUtilities.invokeLater(() -> {
            JDialog.setDefaultLookAndFeelDecorated(true);
            JFrame.setDefaultLookAndFeelDecorated(true);

            Frame frame = new Frame("SQL Generator");
            frame.setName("False Positive Management Tool");


//            MenuBar menuBar = new MenuBar();
//            menuBar.getExitMenuItem().addActionListener(e -> {
//                frame.dispose();
//            });

            // frame.setJMenuBar(menuBar);

            try {
                frame.add(new MainPanel(), BorderLayout.CENTER);
            } catch (Exception e) {
                e.printStackTrace();
            }
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setLocationRelativeTo(null);
            frame.setUndecorated(true);
            frame.setVisible(true);
        });
    }
}
