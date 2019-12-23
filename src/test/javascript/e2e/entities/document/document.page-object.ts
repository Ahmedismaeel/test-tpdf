import { element, by, ElementFinder } from 'protractor';

export class DocumentComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-document div table .btn-danger'));
  title = element.all(by.css('jhi-document div h2#page-heading span')).first();

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class DocumentUpdatePage {
  pageTitle = element(by.id('jhi-document-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  titleInput = element(by.id('field_title'));
  sizeInput = element(by.id('field_size'));
  mimeTypeInput = element(by.id('field_mimeType'));
  contentSelect = element(by.id('field_content'));
  carSelect = element(by.id('field_car'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setTitleInput(title: string): Promise<void> {
    await this.titleInput.sendKeys(title);
  }

  async getTitleInput(): Promise<string> {
    return await this.titleInput.getAttribute('value');
  }

  async setSizeInput(size: string): Promise<void> {
    await this.sizeInput.sendKeys(size);
  }

  async getSizeInput(): Promise<string> {
    return await this.sizeInput.getAttribute('value');
  }

  async setMimeTypeInput(mimeType: string): Promise<void> {
    await this.mimeTypeInput.sendKeys(mimeType);
  }

  async getMimeTypeInput(): Promise<string> {
    return await this.mimeTypeInput.getAttribute('value');
  }

  async contentSelectLastOption(): Promise<void> {
    await this.contentSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async contentSelectOption(option: string): Promise<void> {
    await this.contentSelect.sendKeys(option);
  }

  getContentSelect(): ElementFinder {
    return this.contentSelect;
  }

  async getContentSelectedOption(): Promise<string> {
    return await this.contentSelect.element(by.css('option:checked')).getText();
  }

  async carSelectLastOption(): Promise<void> {
    await this.carSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async carSelectOption(option: string): Promise<void> {
    await this.carSelect.sendKeys(option);
  }

  getCarSelect(): ElementFinder {
    return this.carSelect;
  }

  async getCarSelectedOption(): Promise<string> {
    return await this.carSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class DocumentDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-document-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-document'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
