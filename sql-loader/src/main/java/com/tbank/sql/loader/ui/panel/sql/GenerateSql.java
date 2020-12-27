package com.tbank.sql.loader.ui.panel.sql;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.*;
import java.awt.FlowLayout;
import java.util.Objects;
import javax.swing.JFileChooser;
import java.io.File;
import java.io.IOException;
import java.util.Iterator;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class GenerateSql extends JPanel {
    public int id;
    public JButton titleButton;
    public JTextArea  area;
    private String selectedDatabase = "Oracle";

    public GenerateSql() throws IOException {
        setLayout(new FlowLayout());

        String targetDatabases[] = { "Oracle", "Postgres", "DB2"};
        final JComboBox<String> databaseSelection = new JComboBox<String>(targetDatabases);

        databaseSelection.setVisible(true);
        add(databaseSelection);


        databaseSelection.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                selectedDatabase =
                        databaseSelection.getItemAt(databaseSelection.getSelectedIndex());
                System.out.println("selected database "+ selectedDatabase);
            }
        });

        // set up a file picker component
        JFilePicker filePicker = new JFilePicker("Pick a file", "Browse...");
        filePicker.setMode(JFilePicker.MODE_SAVE);
        filePicker.addFileTypeFilter(".xls", "Excel Files");

        // access JFileChooser class directly
        JFileChooser fileChooser = filePicker.getFileChooser();
        fileChooser.setCurrentDirectory(new File("C:/"));

        // add the component to the frame
        add(filePicker);
        setSize(520, 100);


        JButton button = new JButton("Load Report");
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent evt) {
                // check if file is loaded
                File file = fileChooser.getSelectedFile();

                if(Objects.isNull(file)){
                    JOptionPane.showMessageDialog(null, "Select Valid file");
                }
                else{



                System.out.println("selected database "+ selectedDatabase);

                // read file


                Workbook workbook = null;
                FileInputStream inputStream = null;
                try {
                    inputStream = new FileInputStream(file);
                    workbook = new XSSFWorkbook(inputStream);
                Sheet firstSheet = workbook.getSheetAt(0);
                Iterator<Row> iterator = firstSheet.iterator();

                area.removeAll();

                while (iterator.hasNext()) {
                    Row nextRow = iterator.next();
                    Iterator<Cell> cellIterator = nextRow.cellIterator();

                    while (cellIterator.hasNext()) {
                        Cell cell = cellIterator.next();
                        area.append(cell.getStringCellValue());
                        area.setLineWrap(true);

                        switch (cell.getCellType()) {
                            case Cell.CELL_TYPE_STRING:
                                System.out.print(cell.getStringCellValue());
                                break;
                            case Cell.CELL_TYPE_BOOLEAN:
                                System.out.print(cell.getBooleanCellValue());
                                break;
                            case Cell.CELL_TYPE_NUMERIC:
                                System.out.print(cell.getNumericCellValue());
                                break;
                        }
                        System.out.print(" - ");
                    }
                    System.out.println();
                }
                    workbook.close();
                    inputStream.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }


                //
            }
            }
        });

        add(button);

        area = new JTextArea("Query ------------------");
        area.setVisible(true);
       // area.setBounds(0,50, 200,200);
        add(area);

    }
}
