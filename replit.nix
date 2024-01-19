{ pkgs }: {
    deps = [
      pkgs.wget
      pkgs.nodePackages.vscode-langservers-extracted
      pkgs.nodePackages.typescript-language-server
    ];
  }