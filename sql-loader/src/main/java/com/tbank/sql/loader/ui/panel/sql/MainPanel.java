package com.tbank.sql.loader.ui.panel.sql;



import javax.swing.*;
import java.io.IOException;

public class MainPanel extends JTabbedPane {
    private static final String generateSql = "Generate SQLs";

    public MainPanel() throws IOException {
        add(generateSql, new GenerateSql());
    }
}
