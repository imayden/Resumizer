# Git Branch Management: Tutorial

This tutorial provides a step-by-step guide on using Git with VSCode for branch management, making changes, and handling common issues like untracked files.

## Branches
### Default Branch
- `master`
### Temporary Branches
- `ayden`
- `danny`
- `earth`
- `henry`
### Other Branch
- main

## Prerequisites

- Git and VSCode installed.
- Basic understanding of Git commands.
- Access to a GitHub repository, e.g., `Resumizer`.

## Tutorial Overview

1. **Setting Up Your Workspace**
2. **Branching and Making Changes**
3. **Handling Untracked Files**
4. **Reviewing Code Online**
5. **Merging Changes into the Main Branch**
6. **Resolving Merge Conflicts**
7. **Final Steps and Cleanup**

## Detailed Steps

### 1. Setting Up Your Workspace

Ensure your local repository is up-to-date:

```bash
cd path/to/Resumizer
git pull origin master
```

### 2. Branching and Making Changes

Create and switch to a new branch:

```bash
git checkout -b ayden
```

Make your code changes in VSCode. Then, add and commit those changes:

```bash
git add .
git commit -m "Describe your changes"
```

Push the changes to the remote branch:

```bash
git push origin ayden
```

### 3. Handling Untracked Files

If you encounter a message about untracked files during commit:

```plaintext
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../gitBranchManagement.md
```

Add the untracked files before committing:

```bash
git add ../gitBranchManagement.md
git commit -m "Add untracked files"
```

### 4. Reviewing Code Online

Create a Pull Request (PR) on GitHub for the `ayden` branch. Invite team members to review the code and make necessary revisions based on feedback.

### 5. Merging Changes into the Main Branch

Ensure your `master` branch is up-to-date:

```bash
git checkout master
git pull origin master
```

Merge the `ayden` branch into `master`:

```bash
git merge ayden
```

### 6. Resolving Merge Conflicts

If you encounter merge conflicts, resolve them manually in VSCode, then add and commit the resolved files:

```bash
git add .
git commit -m "Resolve merge conflicts"
```

### 7. Final Steps and Cleanup

Push the merged changes to the remote `master` branch:

```bash
git push origin master
```

Optionally, delete the branches that are no longer needed:

```bash
git branch -d ayden  # Delete local branch
git push origin --delete ayden  # Delete remote branch
```

## Conclusion

By following these steps, you ensure that your code changes are reviewed and merged into the main branch in a stable manner. Always check for untracked files before committing and perform thorough testing after resolving any conflicts.
